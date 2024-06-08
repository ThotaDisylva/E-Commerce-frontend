# E-Commerce-website

## Description 
This project is a frontend web application built using ReactJS and styled with Tailwind CSS. It includes various features such as user authentication, product management for the admin portal, a search and filter page, a checkout process, and order management.

## Requirments 
<li>IDE for frontend - VS code</li>
<li>vite+react</li>
<li>Tailwind CSS </li>
<li>Material MUI  </li>

## Getting Started
### Frontend
To get started with this project, follow these steps:

#### Clone the repository:
```
git clone https://github.com/vasu-choudhary/E-Commerce-frontend.git
```
#### Navigate to the project directory:
```
cd ecommerce-app
```
#### Install dependencies:
```
npm install
```
![image](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/adcafc0b-a223-4eb5-be66-255e4e960468)

After Installing, your terminal will look similar to this.  
### To start the application
run the below command  
```
npm run dev
```
after running the above command,you will get a localhost link where the application is started similar to below image  

![image](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/4292d3c3-879e-40fe-a37a-409616273963)

### Backend
The frontend code for this project is available in a separate repository. You can find it [here](https://github.com/vasu-choudhary/E-Commerce-backend)   

## Documentation
1. [Vite+react](https://vitejs.dev/guide/) 
2. [node](https://nodejs.org/en)
3. [Tailwind CSS](https://tailwindcss.com/docs/installation)
4. [Material UI](https://mui.com/material-ui/getting-started/)

## Functionalities  
1)
![Screenshot (97)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/09e0a418-b79c-4a83-a163-9a10787afede)  
If the user or admin is new to the website,he can first signup using his information.  
If he is admin,he should check the “register as admin”  button or else leave it unchecked.    

  
2)
![Screenshot (96)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/2f18c7e2-4aad-4c55-a22f-0d4a8ad3a67a)  
Now using the credentials created while signing up, one can login to website.
If admin is trying to login,he will be directed to admin portal,or if user is logging in,it will be directed to user side of website.  
Both will have the same login page.Based on the role,the website will be redirected.  
  
  
3)
![image (3)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/408768c9-236f-45bb-a645-b83ce535535b)  
This is the add new product page on admin side, where admin can add new products specifying details such as name, description,price, and quantity.

  
4)
![Screenshot (98)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/8cbd9a88-61ac-47fc-9e06-2ed36226c370)  
When you add some items to the cart,the cart will look like this.
  
  
5)
![Screenshot (100)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/49cce1c1-7afb-410f-a4fb-32c6b0ca2e71)  
OrderSummary page where user can check the products, delivery address and can go to payment.

6)
![Screenshot (102)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/2d5925a8-33b8-4bbd-a288-cfd9fbdbe469)  
OrderDetails page where user can check the ordered products, delivered address and can check the status of order.


7)
![image (4)](https://github.com/ThotaDisylva/E-Commerce-frontend/assets/169328558/4b54448c-fa3b-4053-8d5c-b54e9ecb3c03)  
This is the invoice that will be generated when you press the download invoice button in orderDetails page.  
Invoice has ordered products, quantity, total price, delivery charges and  delivery address.



