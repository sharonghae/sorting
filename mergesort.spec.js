describe('Split Array function', function() {
        it('is able to split an array into two halves', function() {
            expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4], [5,6,7,8]]);
        });
        it('is able to split odd numbered arrays', function() {
            expect(split([1,2,3,4,5,6,7])).toEqual([[1,2,3,4], [5,6,7]]);
        });
});
describe('Merge', function() {
        it('is able to merge two sorted arrays into one sorted array', function() {
            expect(merge([1,2,4,7], [3,6,8,9])).toEqual([1,2,3,4,6,7,8,9]);
        });
});

describe('Merge Sort', function() {
        it('is able to merge two sorted arrays into one sorted array', function() {
            expect(mergeSort([1,4,3,2])).toEqual([1,2,3,4]);
        });
});