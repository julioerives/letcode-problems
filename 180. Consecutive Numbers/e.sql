WITH numbers as (
    SELECT 
    num,
    lead(num,1) OVER () AS num2,
    LEAD (num,2) OVER () AS num3
    FROM logs
)
SELECT DISTINCT(num) AS ConsecutiveNums
FROM numbers
WHERE num2 = num AND num3 = num
