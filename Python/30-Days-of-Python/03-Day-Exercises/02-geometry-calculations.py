"""4. Escribe un script que pida al usuario la base y la altura de un triángulo
y calcule su área (Área = 0.5 x b x h).

Entrada base: 20
Entrada altura: 10
El área del triángulo es 100
"""

print("===== Ejercicio 4 =======")

base = int(input("¿Cuál es la base del triángulo? "))
altura = int(input("¿Cuál es la altura del triángulo? "))

area = 0.5 * base * altura

print("Entrada base:", base)
print("Entrada altura:", altura)
print("El área del triángulo es:", area)


"""5. Escribe un script que pida al usuario los lados a, b y c de un triángulo
y calcule su perímetro (Perímetro = a + b + c).

Entrada lado a: 5
Entrada lado b: 4
Entrada lado c: 3
El perímetro del triángulo es 12
"""

print("\n===== Ejercicio 5 =======")

lado_a = int(input("Ingrese el lado a del triángulo: "))
lado_b = int(input("Ingrese el lado b del triángulo: "))
lado_c = int(input("Ingrese el lado c del triángulo: "))

perimetro = lado_a + lado_b + lado_c

print("Entrada lado a:", lado_a)
print("Entrada lado b:", lado_b)
print("Entrada lado c:", lado_c)
print("El perímetro del triángulo es:", perimetro)


"""6. Pide al usuario la longitud y la anchura de un rectángulo.
Calcula su área (Área = largo x ancho) y su perímetro
(Perímetro = 2 x (largo + ancho)).
"""

print("\n===== Ejercicio 6 =======")

largo = int(input("¿Cuál es la longitud del rectángulo? "))
ancho = int(input("¿Cuál es la anchura del rectángulo? "))

area_rectangulo = largo * ancho
perimetro_rectangulo = 2 * (largo + ancho)

print("Entrada de longitud:", largo)
print("Entrada de anchura:", ancho)

print("El área del rectángulo es:", area_rectangulo)
print("El perímetro del rectángulo es:", perimetro_rectangulo)


"""7. Pide al usuario el radio de un círculo.
Calcula su área (Área = pi x r²) y su circunferencia
(Circunferencia = 2 x pi x r), con pi = 3.14.
"""

print("\n===== Ejercicio 7 =======")

radio = int(input("Ingrese el radio del círculo: "))

pi = 3.14

area_circulo = pi * radio * radio
circunferencia = 2 * pi * radio

print("Entrada del radio:", radio)
print("El área del círculo es:", area_circulo)
print("La circunferencia del círculo es:", circunferencia)
