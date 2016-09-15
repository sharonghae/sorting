describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles array with one item', function(){
  	expect( bubbleSort([3]) ).toEqual([3]);
  });
  it('handles array with length greater than zero', function(){
  	expect( bubbleSort([4,1,5,8,6]) ).toEqual([1,4,5,6,8]);
  });
});
