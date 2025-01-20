const isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const c of s) {
        if (Object.values(mapping).includes(c)) {
            stack.push(c);
        } else if (mapping.hasOwnProperty(c)) {
            if (!stack.length || mapping[c] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;    
};

// # Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// # An input string is valid if:

// #1. Open brackets must be closed by the same type of brackets.
// #2. Open brackets must be closed in the correct order.
// #3. Every close bracket has a corresponding open bracket of the same type.