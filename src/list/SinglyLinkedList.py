class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class SinglyLinkList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.len = 0

    def push(self, data):
        if self.head is None:
            self.head = Node(data)
        else:
            cur = self.head
            while cur.next is not None:
                cur = cur.next
            cur.next = Node(data)
        self.len += 1
        # while True:
        #     if cur.next is None: break
        #     cur = cur.next
        # cur.next = Node(data)
        return self

    # Not Working append method 
    def append(self, data):
        if self.head is None:
            self.head = Node(data)
        else:
            self.tail = self.tail.next = Node(data)
        self.len += 1
        return self

    def pop(self):
        if self.head is not None:
            
            pass
        return self
        pass


    def print_list(self):
        cur = self.head
        if cur is not None:
            print(cur.data)
            while cur.next is not None:
                cur = cur.next
                print(cur.data)
        else:
            print("List is Empty")


# list_one = SinglyLinkList()
# list_one.push(1)
# list_one.push(2)
# list_one.push(3)
# list_one.push(4)

list_two = SinglyLinkList()
list_two.push(11)
list_two.push(22)
# list_two.append(33)
list_two.push(44)
list_two.push(13)
list_two.push(14).pop()
list_two.push(15)
list_two.append(16)

list_two.print_list()
