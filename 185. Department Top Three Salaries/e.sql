WITH RankedSalaries AS (
    SELECT 
        E.name AS Employee, 
        E.salary, 
        D.name AS Department, 
        DENSE_RANK() OVER (PARTITION BY E.departmentId ORDER BY E.salary DESC) AS salary_rank
    FROM employee E
    JOIN Department D ON D.id = E.departmentId
)
SELECT Department, Employee, salary
FROM RankedSalaries
WHERE salary_rank <= 3
ORDER BY Department, salary DESC;
