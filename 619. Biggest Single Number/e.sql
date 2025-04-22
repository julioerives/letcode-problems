SELECT MAX(num) AS num FROM (
    SELECT num
    FROM myNumbers
    GROUP BY num HAVING( COUNT(num) <2)
) AS example