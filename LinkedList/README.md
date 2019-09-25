# Thanks for taking the time to read this!

### Should be noted that it is structured differently than how the bootcamp suggests, the file included is my implementation of a Singly Linked List

In the bootcamp example they expect the students to come up with the following:

I find this has confused some students!
- The list starts out backwards, note that node1, node2, and node3 end up creating a list which is ordered 12 -> 99 -> 37 (node3, node2, node1) 
- The directions say to return a reversed list using a stack so once we try that we get a poppable stack which will return nodes in this order once popped (37 -> 99 -> 12)
- Using the pop method in the stack simply does not work because our list will just reverse the order anyways
- The "reversed list" returns 12 -> 99 -> 37 
- See the comments in the code for more context 
```class LinkedListNode
 attr_accessor :value, :next_node
 def initialize(value, next_node=nil)
   self.value = value
   self.next_node = next_node
 end
end
def print_values(listnode)
 if listnode
   print "#{listnode.value} -->"
   print_values(listnode.next_node)
 else
   print "nil\n"
   return
 end
end
node1 = LinkedListNode.new(37)
node2 = LinkedListNode.new(99, node1)
node3 = LinkedListNode.new(12, node2)
# Our list looks like this 12 -> 99 -> 37
print_values(node3)
class Stack
 attr_accessor :data
 def initialize
   self.data=nil
 end
 def push(value)
   if self.data==nil
     self.data = LinkedListNode.new(value)
   else
     self.data = LinkedListNode.new(value,self.data)
   end
 end
 def pop
   value = self.data.value
   self.data = self.data.next_node
   return value
 end
end
def reverse_list(list)
   # ADD CODE HERE
   stacklist = Stack.new
   while list
       # ADD CODE HERE
       stacklist.push(list.value)
       puts list.value
       list = list.next_node
   end
   # Our stack looks like this: 37 -> 99 -> 12
   while stacklist.data
       list=LinkedListNode.new(stacklist.pop,list)
       puts list.value
       # our "reversed list" 12 -> 99 -> 37
      #if it didn't order them backwards this would've been fine!
   end
   return list
end
node3=reverse_list(node3)
print_values(node3)
