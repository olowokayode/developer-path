print("This is a program to find the gcd of two numbers a and b")
print("please enter the numbers")
a = int(input("the first number a:"))
b = int(input("the second number b:"))
if( b>a):
    temp = a
    a = b
    b = temp
high_number = a
low_number = b
while (b>0):
    quotient = a//b
    remainder = a%b
    a = b
    b = remainder
print("the gcd of",high_number, "and",low_number, "is", a)
