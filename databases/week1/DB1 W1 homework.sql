#1
select count(*) from task; #35

#2
select * from task where due_date is null; #8 rows
select count(*) from task where due_date is null; # count 8 rows

#3
select * from task where status_id = '3'; #12 rows

#4
select * from task where status_id != '3'; #23 rows

#5
select * from task order by created desc; #task id 25 is the latest

#6
select max(created) as created from task; #return 1 created record
select * from task where created = (select max(created) from task); #return the entire row

#7
select title, due_date from task where title like '%database%' or description like '%database%'; #5 rows

#8
select title as text, status_id as text from task; #both colunms are names text

#9
select status.id, status.name,
count(status_id) as number_of_tasks
from status inner join task on (status_id = status.id)
group by status.id;

#10
select status.id, status.name,
count(status_id) as number_of_tasks
from status inner join task on (status_id = status.id)
group by status.id
order by number_of_tasks desc;




