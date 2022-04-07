#!/bin/bash

delete_docker (){
	echo test
}


trap 'other_commands' SIGINT
sleep infinity
