#!/bin/bash

sudo docker rm -f  my-running-app
echo -e "\e[31m\e[1mDocker wurde gelöscht\e[0m"
sleep 4
sudo docker build -t my-apache2 .
echo -e "\e[32m\e[1mDocker wird gebaut ...\e[0m"
sleep 4
echo -e "\e[32m\e[5mDocker ist gestartet\e[0m"
sudo docker run -it --rm -v $PWD:/usr/local/apache2/htdocs --name my-running-app -p 8080:80 my-apache2
sleep 1
sudo docker rm -f  my-running-app
echo -e "\e[31m\e[1mDocker wurde gelöscht\e[0m"
