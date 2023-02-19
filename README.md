# Readme

This is a simple react native app consuming Rest Api from https://github.com/ThomasWYang/tpg_demo deployed on AWS EC2 http://13.236.184.156
The app is only tested on web browser.

## Install via Git (recommended) 

1. Make sure Node.js 18+ (https://nodejs.org/en/) is installed in the local environment.
Use following command in command line to check.
```sh
node -v
npm -v
```
2. Use git clone to copy repo to local
```sh
git clone https://github.com/ThomasWYang/candidate_react_native_app.git
```
3. Change directory into that folder and run following command, the app will run on default port 19006.
```sh
npm install
npm run web
```
If you see this info is displayed, the app is running correctly
![图片](https://user-images.githubusercontent.com/84115795/219852126-c9109397-6cd4-471d-9dd1-684db961bda3.png)

## Install via Docker (not recommended because the docker image is big) 

1. Make sure Docker desktop (https://www.docker.com/) is running.
2. Pull the docker image from docker hub.
```sh
docker pull thomasy2022/candidate_react_native_app
```
3. Run the following command to run the app in a container. The app will run on port 19006 with below command.
```sh
docker run -d -p 19006:19006 thomasy2022/candidate_react_native_app
```
4. You can also use docker-compose.yml file inside this repo combined with the docker image to run the app
```sh
docker compose up
```
It will run on configured port 19006 and you will see similar info below. 
![图片](https://user-images.githubusercontent.com/84115795/219852256-b45ae281-f246-41fc-b134-064231f8c607.png)

If the webpage is not opened automatically, please open http://localhost:19006 .

## Usage

1. Search all candidates (without any specification): click "Search" button directly

![图片](https://user-images.githubusercontent.com/84115795/219853146-263c4153-b9a6-4fb5-92e0-0f40de3a4576.png)

2. Search candidates by fname, lname or email (you can give any combination of these 3 fields): give value in relevant field and click "Search" button

![图片](https://user-images.githubusercontent.com/84115795/219853159-c794c188-8a44-47a3-af30-ae9c0ebaf601.png)

3. Order search result by score : click "OrderByScore" button

![图片](https://user-images.githubusercontent.com/84115795/219853175-d9531b34-309b-4de1-8487-076518fba386.png)

4. Add candidate: ensure the rightmost button on second row is "Add" and click and give at least fname and lname to add candidate
If missing fields:

![图片](https://user-images.githubusercontent.com/84115795/219853193-1f64bc62-fcde-4b5e-ab4a-3ab6d0482dd2.png)

If add successfully:

![图片](https://user-images.githubusercontent.com/84115795/219853220-6b180ab7-e813-43d9-a305-29048498d1af.png)

5. Update candidate: click "Switch to Update" button to change "Add" to "Update", 

![图片](https://user-images.githubusercontent.com/84115795/219853254-6f2181ba-a626-433f-a362-37b93543acb9.png)

Then click "Select" button on any displayed row to make the id become a valid value, give at least fname and lname to update candidate.
The candidate will be updated after clicking "Update" button.

![图片](https://user-images.githubusercontent.com/84115795/219853284-d4f9c2a3-53bf-45f3-a8c4-3a31ee40e765.png)

6. Delete candidate: click "Delete" button on any displayed row, that candidate will be deleted and removed from current list.

![图片](https://user-images.githubusercontent.com/84115795/219853360-5047a17c-f522-49dc-aa13-5189c6078eee.png)
