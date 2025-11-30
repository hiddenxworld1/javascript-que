/* Stack and Heap */
/*

What is Memory Management?

Memory management = JavaScript allocating memory and cleaning it up automatically so your program doesn’t crash.

When you create variables, objects, arrays, functions, etc., JS needs some space in RAM to store them.
JavaScript automatically handles:

Memory Allocation (space dena)

Memory Usage (data ka kaam chal raha hai)

Garbage Collection (kacha-kach… old, unused data ko clean karna)

You don’t manually free memory like in C/C++.
JavaScript ka boss = Garbage Collector.

*/

/*
Stack

Stack is the memory where JavaScript stores simple values like numbers, strings, and booleans, and also stores references to objects. It’s small, fast, and works like a stack of plates — last value goes in, first comes out.”


Heap 

“Heap is the memory where all big and complex things live — like objects, arrays, and functions. It’s a big open storage area where JavaScript keeps anything that doesn’t fit in the stack.” 

(Note : “In simple terms, stack stores simple values and pointers, while heap stores the actual complex data. Stack is fast and ordered; heap is large and dynamic.”)

*/