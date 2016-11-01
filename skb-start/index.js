var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDZkNjJmYjc0ZDAwMTFiZTdmNDgiLCJ1c2VybmFtZSI6Im5mcmNhcHRhaW5AeWFuZGV4LnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0NzgwMjI4NzF9.g5OLv8CQSFyKWf1HIABk2BECBJqXd7OFMV2zCjf1t4o';
var skb = new Skb(token);
skb.taskHelloWorld('Здравствуй, СКБ-токен! 8)))');

