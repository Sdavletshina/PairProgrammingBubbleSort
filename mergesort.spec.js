describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here
     expect(split([1,2])).toEqual([[1],[2]])
  });

});
describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    expect(merge([1, 2],[3, 4])).toEqual([1,2,3,4]);
  });
    it('is able to merge two sorted arrays with different lengths into one sorted array', function () {
    expect(merge([1, 3, 8], [3, 4])).toEqual([1, 3, 3, 4, 8])
  });
});
describe('mergeSort function', function () {
  it('is able to sort an array', function () {
    // test the merging algorithm
    expect(mergeSort([1,5,2,7,3])).toEqual([1, 2, 3, 5, 7]);
  });

});
