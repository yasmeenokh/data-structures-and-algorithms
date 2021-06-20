# Insertion Sort

Insertion Sort is one of the simpler sorting algorithms. It's highly intuitive, stable, in-place, and of comparison-type. A stable sorting algorithm is an algorithm in which two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted.

# Pseudocode

    InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

# Trace

**Sample Arrays:** [8,4,23,42,16,15]

**First Pass:**
in the first iteration; where i=1 and j=0, and the temp array is basically array[i] = 4; so know since we are storing the temp we compare it with the previous value if it is smaller, then inserted before that value(shift the array).

**Second Pass:**
The second time now our array is equal to [4,8,23,42,16,15]; where i=2 and j=1, store our value in the temp array compare it with the previous value, if it is smaller switch their places, else break the loop, so since 23 is not smaller it will not be shifted.

**Third Pass:**
The third time now our array is equal to [4,8,23,42,16,15]; where i=3 and j=2, store our value in the temp array compare it with the previous value, if it is smaller switch their places, else break the loop, so since 23 is not smaller it will not be shifted.

**Forth Pass:**
The forth time now our array is equal to [4,8,23,42,16,15]; where i=4 and j=3, store our value in the temp array compare it with the previous value, if it is smaller switch their places, which will come back as true since 16 is smaller then 42, afterwards we will compare 16 with 23, ie i=3 and j=2, which will come back as true since 16 is smaller then 23, so they will switch places, the loop will continue with 16<8 which will be false , thus breaking the loop.

**Fifth Pass:**
The fifth time now our array is equal to [4,8,23,42,16,15]; where i=5 and j=4, store our value in the temp array compare it with the previous value, if it is smaller switch their places, which will come back as true since 16 is smaller then 42, afterwards we will compare 15 with 23, ie i=3 and j=2, which will come back as true since 16 is smaller then 23, so they will switch places, the loop will continue with is 15<16 which will be true, so they will switch places, and finally is 15<8 which will be false thus breaking the loop.



[BLOG](images/code26Blog.jpg)


## Efficiency
**Time:** O(n^2)
**Space:** O(1)

