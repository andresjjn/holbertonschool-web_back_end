-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
CREATE INDEX idx_name_first_score ON names (name(1), score);