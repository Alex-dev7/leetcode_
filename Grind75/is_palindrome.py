def isPalindrome(self, s: str) -> bool:
    s = [i for i in s.lower() if i.isalnum()] 
    # used slicing to cread a new reversed list
    return s == s[::-1]