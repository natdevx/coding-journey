# 8. Calcula la pendiente, la intersección en x y la intersección en y de y = 2x - 2.
print("===== Ejercicio 8 =======")
# Ecuación: y = 2x - 2
slope_exercise8 = 2

# Intersección con el eje X
y = 0
x = int((y + 2) / 2)
x_intercept = (x, y)

# Intersección con el eje Y
x = 0
y = 2 * x - 2
y_intercept = (x, y)

print("Pendiente:", slope_exercise8)
print("Intersección en x:", x_intercept)
print("Intersección en y:", y_intercept)


# 9. La pendiente se calcula como (m = (y2 - y1) / (x2 - x1)). Encuentra la pendiente y la distancia euclídea entre los puntos (2, 2) y (6, 10).
print("===== Ejercicio 9 =======")
x1, y1 = 2, 2
x2, y2 = 6, 10

slope_exercise9 = (y2 - y1) / (x2 - x1)
distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

print("Punto 1:", (x1, y1))
print("Punto 2:", (x2, y2))
print("Pendiente:", slope_exercise9)
print("Distancia euclídea:", distance)

# 10. Compara las pendientes obtenidas en los ejercicios 8 y 9.
print("===== Ejercicio 10 =======")

print("Pendiente del ejercicio 8:", slope_exercise8)
print("Pendiente del ejercicio 9:", slope_exercise9)

print("¿Son iguales?", slope_exercise8 == slope_exercise9)

# 11. Calcula el valor de y para y = x^2 + 6x + 9. Prueba con distintos valores de x y encuentra cuándo y es 0.

print("===== Ejercicio 11 =======")

x = -3
y = x **2 + (6 * x) + 9

print('Entonces y es: ', y)
