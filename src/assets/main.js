$(function() {

  $.ajax({
      url: 'https://www.codeschool.com/users/chazzlabs.json',
      dataType: 'jsonp',
      success: function(response) {
          response.courses.completed.forEach(function(completedCourse) {
              var completedCourseHtml =
                '<h3>' + completedCourse.title + '</h3>' +
                '<img src="' + completedCourse.badge + '"/>' +
                '<a href="' + completedCourse.url + '" target="_blank" class="btn btn-primary">See Course</a>';

              $('#badges').append('<div class="course">' + completedCourseHtml + '</div>');
          });
      }
  });

});
