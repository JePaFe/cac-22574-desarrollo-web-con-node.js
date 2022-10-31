INSERT INTO productos 
(`nombre`, `descripcion`, `categoria_id`, `slug`) 
VALUES ('Prod prueba 3', '22', 20, 'prod-prueba-3');

---

SELECT * 
FROM productos
WHERE slug LIKE '%prueba%'
# ORDER BY nombre ASC
# LIMIT 2

---

UPDATE productos
SET nombre = 'Producto 33'
WHERE id = 2

---

DELETE FROM productos
# WHERE id = 5

---

SELECT productos.nombre, categorias.nombre
FROM productos
INNER JOIN categorias ON categorias.id = productos.categoria_id
