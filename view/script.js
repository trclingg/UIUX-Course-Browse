// REGION 1
var gBASE_URL = "https://630890e4722029d9ddd245bc.mockapi.io/api/v1";
var gCoursesDB;


// REGION 2
$(document).ready(function () {

  onPageLoad();

  // add event for bookmarks
  $(document).on("click", ".card-bookmark", function () {
    // if it is not bookmarked
    var vBookmark = $(this).find("i");
    if (vBookmark.hasClass("far fa-bookmark")) {
      vBookmark.removeClass("far fa-bookmark");
      vBookmark.addClass("fas fa-bookmark");
      vBookmark.css("color", "#FFC107");
    }
    else {
      // undo bookmark
      vBookmark.removeClass("fas fa-bookmark");
      vBookmark.addClass("far fa-bookmark");
      vBookmark.css("color", " #6C757D");

    }
  })
}
);





// REGION 3
function onPageLoad() {
  callApiToGetAllCourseList();

}
// REGION 4
function callApiToGetAllCourseList() {
  $.ajax({
    url: gBASE_URL + "/courses",
    method: "GET",
    success: function (paramCourseListObject) {
      gCoursesDB = paramCourseListObject;
      // console.log(gCoursesDB.length);
      renderPopularCourses();
      renderTrendingCourses();
      renderRecommendedCourses();
    }
  })
}
function renderRecommendedCourses() {
  var vRecommendCourses = $("#recommended-section");
  vRecommendCourses.html("");
  var vMatchCount = 0;
  var bI = 0;
  // 
  while (vMatchCount < 4 && bI < gCoursesDB.length) {
    var vCourse = gCoursesDB[bI];
    var vCourseHTML = $("<div>").html(` <!-- start card -->
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 pl-0 pb-3">
              <article class="card">
                <img class="course-img" src="${vCourse.coverImage}" alt="">
                <div class="content">
                  <p class="title">${vCourse.courseName}</p>
                  <div class="time level">
                    <span><i class="far fa-clock"></i>&nbsp; ${vCourse.duration}</span>
                    &nbsp; &nbsp;
                    <span>${vCourse.level}</span>
                  </div>
                  <div class="price">
                    <span class="discounted">$${vCourse.discountPrice}</span>
                    <span class="original"> $${vCourse.price}</span>
                  </div>
                </div>
                <footer>
                  <div class="author">
                    <img src="${vCourse.teacherPhoto}" alt="">
                    <span>${vCourse.teacherName}</span>
                  </div>
                  <div class="card-bookmark"><i class="far fa-bookmark" style="color: #6C757D;"></i></div>
                </footer>

              </article>
            </div>
            <!-- end card --> `).data("object", vCourse).data("id", vCourse.id).data("courseCode", vCourse.courseCode).appendTo(vRecommendCourses);
    vMatchCount++;
    bI++;
  };

}

function renderPopularCourses() {
  var vPopularCourses = $("#most-popular-section");
  vPopularCourses.html("");
  var vMatchCount = 0;
  var bI = 0;
  while (vMatchCount < 4 && bI < gCoursesDB.length) {
    // for (var bI = 0; bI < gCoursesDB.courses.length; bI++) {

    if (gCoursesDB[bI].isPopular) {
      vMatchCount++;
      var vCourse = gCoursesDB[bI];
      var vCourseHTML = $("<div>").html(` <!-- start card -->
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 pl-0 pb-3">
              <article class="card">
                <img class="course-img" src="${vCourse.coverImage}" alt="">
                <div class="content">
                  <p class="title">${vCourse.courseName}</p>
                  <div class="time level">
                    <span><i class="far fa-clock"></i>&nbsp; ${vCourse.duration}</span>
                    &nbsp; &nbsp;
                    <span>${vCourse.level}</span>
                  </div>
                  <div class="price">
                    <span class="discounted">$${vCourse.discountPrice}</span>
                    <span class="original"> $${vCourse.price}</span>
                  </div>
                </div>
                <footer>
                  <div class="author">
                    <img src="${vCourse.teacherPhoto}" alt="">
                    <span>${vCourse.teacherName}</span>
                  </div>
                  <div class="card-bookmark"><i class="far fa-bookmark" style="color: #6C757D;"></i></div>
                </footer>

              </article>
            </div>
            <!-- end card --> `).data("object", vCourse).data("id", vCourse.id).data("courseCode", vCourse.courseCode).appendTo(vPopularCourses);


    }
    bI++;
  };

}

function renderTrendingCourses() {
  var vTrendingCourses = $("#trending-section");
  vTrendingCourses.html("");
  // for (var bI = 0; bI < gCoursesDB.courses.length; bI++) {
  var vMatchCount = 0;
  var bI = 0;
  while (vMatchCount < 4 && bI < gCoursesDB.length) {
    if (gCoursesDB[bI].isTrending) {
      vMatchCount++;
      var vCourse = gCoursesDB[bI];
      var vCourseHTML = $("<div>").html(` <!-- start card -->
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 pl-0 pb-3">
              <article class="card">
                <img class="course-img" src="${vCourse.coverImage}" alt="">
                <div class="content">
                  <p class="title">${vCourse.courseName}</p>
                  <div class="time level">
                    <span><i class="far fa-clock"></i>&nbsp; ${vCourse.duration}</span>
                    &nbsp; &nbsp;
                    <span>${vCourse.level}</span>
                  </div>
                  <div class="price">
                    <span class="discounted">$${vCourse.discountPrice}</span>
                    <span class="original"> $${vCourse.price}</span>
                  </div>
                </div>
                <footer>
                  <div class="author">
                    <img src="${vCourse.teacherPhoto}" alt="">
                    <span>${vCourse.teacherName}</span>
                  </div>
                  <div class="card-bookmark"><i class="far fa-bookmark" style="color: #6C757D;"></i></div>
                </footer>

              </article>
            </div>
            <!-- end card --> `).data("object", vCourse).data("id", vCourse.id).data("courseCode", vCourse.courseCode).appendTo(vTrendingCourses);

    }
    bI++;
  };

}
