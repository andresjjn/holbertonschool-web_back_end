-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
CREATE TRIGGER decrease
BEFORE INSERT ON orders
FOR EACH ROW UPDATE items
SET quantity = quantity - NEW.number
WHERE name = NEW.item_name;
