# 16. Encuentra la longitud de 'python', conviértela a float y luego a string.
print("===== Ejercicio 16 =======")
python_length = len("python")
python_length_float = float(python_length)
python_length_string = str(python_length_float)

print("Logitud de python es: ", python_length)
print("La logitud de python en float es: ", python_length_float)
print("La logitud de python en string es:", python_length_string)

# 17. Los números pares son divisibles por 2 con resto 0. ¿Cómo comprobar en Python si un número es par o impar?.
print("===== Ejercicio 17 =======")
numero = int(input("Ingrese un número: "))
is_par = numero % 2 == 0

print("¿El número es par?:", is_par)

# 18. Comprueba si la división entera de 7 entre 3 es igual al valor entero de 2.7.
print("===== Ejercicio 18 =======")

division_entera = 7 // 3
valor_entero = int(2.7)

print("¿Son iguales?:", division_entera == valor_entero)

# 19. Comprueba si el tipo de '10' es igual al tipo de 10.
print("===== Ejercicio 19 =======")

print("¿Tienen el mismo tipo?:", type("10") == type(10))

# 20. Comprueba si int('9.8') es igual a 10.
print("===== Ejercicio 20 =======")

numero = int(float("9.8"))

print("¿Es igual a 10?:", numero == 10)
