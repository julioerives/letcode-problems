WITH daily_amounts AS (
    SELECT visited_on,
        SUM(amount) AS daily_total
    FROM Customer
    GROUP BY visited_on
),
amounts AS (
    SELECT visited_on,
        SUM(daily_total) OVER (
            ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
        ) AS amount_sum,
        ROUND(
            SUM(daily_total) OVER (
                ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
            ) / 7,
            2
        ) AS average_amount
    FROM daily_amounts
)
SELECT visited_on,
    amount_sum AS amount,
    average_amount
FROM amounts
WHERE DATEDIFF(
        visited_on,
        (
            SELECT MIN(visited_on)
            FROM Customer
        )
    ) >= 6;