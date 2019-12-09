select * from task, status;

insert into task (title, description, created, updated, due_date, status_id, user_id)
values ('Black Friday', 'Make sure not to spend money', current_timestamp(), current_timestamp(), current_timestamp()+2, '1', '2');

update task set title = 'White Friday' where task.id = 39; 

update task set due_date = timestampadd(month,2, current_timestamp()) where task.id = 38;

update task set status_id = '2' where task.id = 39;

update task set status_id = '3' where task.id = 37;

delete from task where task.id = 36;