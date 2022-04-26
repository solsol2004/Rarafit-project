const field = "username";
const pageSize = 3;

const query = ref.orderBy(field).limit(pageSize);

function nextPage(last) {
  return ref.orderBy(field).startAfter(last[field]).limit(pageSize);
}

function prevPage(first) {
  return ref.orderBy(field).endBefore(first[field]).limitToLast(pageSize);
}
