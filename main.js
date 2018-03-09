// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(exercise => exercise.name == exerciseName)[0];

// console.log(urlParams, exerciseName);

function saveCodeFile() {
  event.preventDefault(); // is this needed?
  let blob = new Blob([editor.getValue()], {
    type: "text/javascript;charset=utf-8"
  });
  saveAs(blob, exerciseName + ".js", true);
}

function loadCodeFile() {
  // remove_fileInput_listener();
  let fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function(e) {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      editor.setValue(reader.result);
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
  $("#fileInput").click(); // activate the hidden file input
}

//allow user to save/open code with keyboard shortcuts
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    saveCodeFile();
  }
  if (e.keyCode == 79 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    loadCodeFile();
  }
});


$(document).ready(() => {
  // $('#problemsLink').prop('href', `problems?title=${exercise.title}`)
  $('#title').text(exercise.title);
  $('#name').text(exercise.name);
  $('#problem').text(exercise.question);

  //load previous solution from localStorage
  let exerciseCode = exerciseName + "-code";
  if (localStorage.getItem(exerciseCode)) {
    editor.setValue(localStorage.getItem(exerciseCode));
  } else {
    editor.setValue('function ' + exercise.name + '(' + defaultInput(exercise.name) + '){\n  \n}');
    editor.focus();
    editor.setCursor({
      line: 1,
      ch: 2
    });
  }

  // show solution button if already solved
  // if (localStorage.getItem(exerciseName) === "true") {
  //   $('#show').css('visibility','visible');
  // }

  for (let i = 0; i <= 2; i++) {
    let input = inputParser(exercise.inputs[i]);
    window[exerciseName] = solutions[exerciseName];
    let result = window[exerciseName](...input);
    // TODO make this a class instead of an element
    $('.examples').append(`${exerciseName}${exercise.inputs[i]} → ${result}<br>`);
    window[exerciseName] = undefined;
  }

  $('#solve').on('click', () => {
    $('tr').remove();
    const answer = editor.getValue();

    // whenever the user checks their solution, save the most recent version of their code to localStorage
    localStorage.setItem(exerciseCode, answer);
    let ans;
    // console.log(answer);
    try {
      $(".errorMessage").text("");
      eval(`ans=${answer}`);
      const inputs = exercise.inputs;
      // console.log('inpute: ', inputs);

      let results = []
      inputs.forEach((inputStr) => {
        const input = inputParser(inputStr);
        const result = ans(...input);
        // console.log(input);
        window[exerciseName] = solutions[exerciseName];
        const idealResult = solutions[exerciseName](...input);
        window[exerciseName] = undefined;
        $('#tests').append(formatResults(exerciseName, inputStr, idealResult, result));
        // console.log('result: ', result);

        let isCorrect = _.isEqual(result, idealResult)
        results.push(isCorrect)
      });

      if (Math.min(...results) == 1) {
        $('.congrats').text("100% Passing. Well Done!");
        localStorage[exerciseName] = "true";
      }
    } catch (theError) {
      $('.errorMessage').text(theError);
    }
  });


  $('#next').on('click', () => {
    let indx = _.findIndex(exercises, {
      name: exerciseName
    }) + 1;
    let x = exercises[indx];
    window.location.search = `?name=${x.name}&title=${x.title}`
  })

  $('#previous').on('click', () => {
    let indx = _.findIndex(exercises, {
      name: exerciseName
    }) - 1;
    let x = exercises[indx];
    window.location.search = `?name=${x.name}&title=${x.title}`
  })

  $('#save').on('click', () => {
    saveCodeFile();
  })

  $('#open').on('click', () => {
    loadCodeFile();
  })

  // $('#show').on('click', () => {
  //   let s = solutions[exerciseName].toString();
  //   let r = new RegExp(/function/);
  //   let n = s.replace(r, `function ${exercise.name}`)
  //   $('#mySolution').text(n)
  // })
});
