WITH wit_h AS(
    SELECT requester_id AS id FROM requestAccepted
    UNION ALL
    SELECT accepter_id AS id FROM requestAccepted
)
SELECT id, COUNT(id) AS num
FROM wit_h 
GROUP BY id
ORDER BY num DESC
LIMIT 1
