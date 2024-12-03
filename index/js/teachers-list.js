/**
 * This class describes a Node of a Double-Linked List.
 */
class ListNode {
    /**
     * Initializes a new instance of ListNode with the given data.
     * Sets the previous and next nodes to null.
     * @param {*} data - The data to store in the node.
     */
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
/**
 * This class describes a Double-Linked List.
 */
class DoublyLinkedList {
    /**
     * Initializes a new instance of DoublyLinkedList.
     * Sets the head, tail, and size properties to their default values.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Appends a new node to the end of the list.
     * @param {*} data - The data to store in the new node.
     */
    append(data) {
        const newNode = new ListNode(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * Prepends a new node to the beginning of the list.
     * @param {*} data - The data to store in the new node.
     */
    prepend(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    /**
     * Removes the last node in the list.
     */
    removeLast() {
        if (this.tail) {
            if (this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                this.head = null;
                this.tail = null;
            }
            this.size--;
        }
    }

    /**
     * Removes the first node in the list.
     */
    removeFirst() {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                this.head = null;
                this.tail = null;
            }
            this.size--;
        }
    }

    /**
     * Gets the data of the first node in the list, or null if the list is empty.
     * @returns {*} The data of the first node in the list, or null.
     */
    getFirstNode() {
        return this.head ? this.head.data : null;
    }

    /**
     * Gets the data of the last node in the list, or null if the list is empty.
     * @returns {*} The data of the last node in the list, or null.
     */
    getLastNode() {
        return this.tail ? this.tail.data : null;
    }

    /**
     * Retrieves all the data from the nodes in the doubly linked list.
     * @returns {Array} An array containing all the data from the nodes in the list.
     */
    getAllNodes() {
        let nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return nodes;
    }
}

const teacherList = document.getElementById('teacher-list');
const teachers = Array.from(teacherList.children);
const totalTeachers = teachers.length;
const visibleTeachers = 12;
const delay = 0.5;
let currentNodeIndex = Math.floor((Math.random() * totalTeachers));
const leftButton = document.getElementById('arrow-left');
const rightButton = document.getElementById('arrow-right');
const teacherArray = teachers.map(teacher => teacher.cloneNode(true));
const visibleList = new DoublyLinkedList();
for (let i = currentNodeIndex; i < currentNodeIndex + visibleTeachers; i++) {
    visibleList.append(teacherArray[i % totalTeachers]);
}
function renderVisibleTeachers() {
    teacherList.innerHTML = '';
    const visibleNodes = visibleList.getAllNodes();
    visibleNodes.forEach(node => {
        teacherList.appendChild(node);
    });
}

/**
 * Shifts the visible teachers in the list by one teacher to the left or right, with animation.
 * @param {string} direction - The direction to shift the list ('right' or 'left').
 */
function updateVisibleTeachers(direction) {

    if (direction === 'right') {
        const nextTeacher = teacherArray[(currentNodeIndex + visibleTeachers) % totalTeachers];
        visibleList.removeFirst();
        visibleList.append(nextTeacher);
        currentNodeIndex = (currentNodeIndex + 1) % totalTeachers;

        teacherList.style.transition = 'transform ' + delay + 's ease-in-out';
        teacherList.style.transform = 'translateX(-' + (visibleList.getFirstNode().offsetWidth+2) + 'px)';

        setTimeout(() => {
            teacherList.style.transition = 'none';
            teacherList.style.transform = 'translateX(0)';
            renderVisibleTeachers();
            leftButton.addEventListener('click', scrollTeachersLeft);
            rightButton.addEventListener('click', scrollTeachersRight);
        }, delay * 1000);
    }

    if (direction === 'left') {
        const prevTeacher = teacherArray[(currentNodeIndex - 1 + totalTeachers) % totalTeachers];
        visibleList.removeLast();
        visibleList.prepend(prevTeacher);
        currentNodeIndex = (currentNodeIndex - 1 + totalTeachers) % totalTeachers;

        teacherList.style.transition = 'transform ' + delay + 's ease-in-out';    
        teacherList.style.transform = 'translateX(' + (visibleList.getFirstNode().offsetWidth+2) + 'px)';
        setTimeout(() => {
            teacherList.style.transition = 'none';
            teacherList.style.transform = 'translateX(0)';
            renderVisibleTeachers();
            leftButton.addEventListener('click', scrollTeachersLeft);
            rightButton.addEventListener('click', scrollTeachersRight);
        }, delay * 1000);
    }
}

renderVisibleTeachers();

function scrollTeachersLeft() {
    leftButton.removeEventListener("click", scrollTeachersLeft);
    rightButton.removeEventListener("click", scrollTeachersRight);
    updateVisibleTeachers('left');
}
function scrollTeachersRight() {
    leftButton.removeEventListener("click", scrollTeachersLeft);
    rightButton.removeEventListener("click", scrollTeachersRight);
    updateVisibleTeachers('right');
}

leftButton.addEventListener('click', scrollTeachersLeft);
rightButton.addEventListener('click', scrollTeachersRight);