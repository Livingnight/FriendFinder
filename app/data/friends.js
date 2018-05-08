$(document).ready( () => {
    $('select').formSelect();

    $('#surveySubmit').on('click', () => {
        event.preventDefault();
        const name = $('#name').val().trim();
        const picLink = $('#pictureLink').val().trim();
        const answers = $('select').getSelectedValues();
        console.log(`Name: ${name}
        Picture: ${picLink}
        Answers: ${answers})`)
    })
});