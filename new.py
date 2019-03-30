x = int(input('Enter an integer x:'))
#y = int(input('Enter an integer y:'))
#z = int(input('Enter an integer z:'))
#if x%2 == 0:
#    print('')
#    print('x is Even')
#else:
#    print('')
#    print('odd')
#print('Done with conditional')



if x%2 == 0:
    if x%3 == 0:
        print('Divisible by both 2&3')
    else:
        print('Divisible by 2, not by 3')
elif x%3 == 0:
    print('Divisible by 3, not by 2')
else:
    print('Not divisible by 2 or 3')



#if x < y and x < z:
#    print('x is least')
#elif y < z:
#    print('y is least')
#else:
#    print('z is least')



#if x == y:
#    print('x and y are equal')
#    if y != 0:
#        print('therefore, x/y is', x/y)
#elif x < y:
#    print('x is smaller')
#else:
#    print('y is smaller')
#print('Thanks!')
