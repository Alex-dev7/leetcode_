def isValid(s):    
        d = {'(':')', '{':'}','[':']'}
        stack = []
        for char in s:
            if char in d:  # 1
                stack.append(char)
            elif len(stack) == 0 or d[stack.pop()] != char:  # 2
                return False
        return len(stack) == 0 # 3

        
print(isValid(s="([)]"))



# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

#1. Open brackets must be closed by the same type of brackets.
#2. Open brackets must be closed in the correct order.
#3. Every close bracket has a corresponding open bracket of the same type.