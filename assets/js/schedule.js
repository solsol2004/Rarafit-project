$(".mon").click(function () {
  $(".mon-table").removeClass("hidden");
  $(".tue-table,.wed-table,.thu-table,.fri-table,.sat-table").addClass(
    "hidden"
  );
});
$(".tue").click(function () {
  $(".tue-table").removeClass("hidden");
  $(".mon-table,.wed-table,.thu-table,.fri-table,.sat-table").addClass(
    "hidden"
  );
});

$(".wed").click(function () {
  $(".wed-table").removeClass("hidden");
  $(".mon-table,.tue-table,.thu-table,.fri-table,.sat-table").addClass(
    "hidden"
  );
});

$(".thu").click(function () {
  $(".thu-table").removeClass("hidden");
  $(".tue-table,.wed-table,.mon-table,.fri-table,.sat-table").addClass(
    "hidden"
  );
});

$(".fri").click(function () {
  $(".fri-table").removeClass("hidden");
  $(".tue-table,.wed-table,.thu-table,.mon-table,.sat-table").addClass(
    "hidden"
  );
});

$(".sat").click(function () {
  $(".sat-table").removeClass("hidden");
  $(".tue-table,.wed-table,.thu-table,.fri-table,.mon-table").addClass(
    "hidden"
  );
});

$(".closeBtn").click(function () {
  $(
    ".sat-table,.tue-table,.wed-table,.thu-table,.fri-table,.mon-table"
  ).addClass("hidden");
});
