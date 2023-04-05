'use strict'

export default class Stack{
    constructor(maxSize, ...array){
        this._maxSize = maxSize;
        this._size = 0;


        array.forEach((elem) => {
            this.push(elem);
        });
    }

    get size(){
        return this._size;
    }

    get isEmpty(){
        return this.size === 0;
    }

    push(v){
        if(this.size === this._maxSize){
            throw new RangeError('Stack Overflow:');
        }
        this[`_${this.size}`] = v;
        this._size++;
        return this._size;


    }

    pop(){
        if(!this.isEmpty){
            const last = this[`_${this.size-1}`];
            delete this[`_${this.size-1}`];

            this._size--;
            return last;
        }
        throw new RangeError('Stack is already empty');
    }

    pick(){
        return this[`_${this.size-1}`];
    }

}
