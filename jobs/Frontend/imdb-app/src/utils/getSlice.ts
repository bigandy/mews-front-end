export const getSlice = (
  currentPage: number,
  totalPages: number,
  grabNumber: number = 5
) => {
  // want to show [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];

  // if currentPage >= totalPages - 5, show [totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];

  // if currentPage <= 5, show [1,2,3,4,5];

  // 2. display the slice of the array that is relevant

  // 1. create array of all pages.
  const pagesArray = [...new Array(totalPages)].map((_, index) => index + 1);

  const isGrabNumberOdd = !(grabNumber % 2 === 0);

  const numberBeforeCurrentPage =
    Math.floor(grabNumber / 2) + (isGrabNumberOdd ? 1 : 0);
  const numberAfterCurrentPage = Math.floor(grabNumber / 2);

  let startSlice = currentPage - numberBeforeCurrentPage;
  let endSlice = currentPage + numberAfterCurrentPage;

  if (currentPage < numberBeforeCurrentPage) {
    startSlice = 0;
    endSlice = grabNumber; // i.e. the last one
  } else if (currentPage > totalPages - numberAfterCurrentPage) {
    startSlice = totalPages - grabNumber;
    endSlice = totalPages;
  }

  const sliced = pagesArray.slice(startSlice, endSlice);
  return sliced;
};
