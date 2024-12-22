# Active Directory - Common Tasks

**Common Tasks**:
1. Reset user password
2. Add a user to a group
3. Create a user account

Open the Active Directory Users and Computers (ADUC) program to follow the instructions for each task.

## Reset user password
### 1. Find the User Account
1. Click the Search Icon.
2. Enter the user’s name or logon name to find the account.
3. Click "Find Now". 

![Find user](images/1_reset_user_password/1_find_user.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2023/08/reset-ad-password-3.webp) 

### 2. Reset Password
1. Right click the account and select “Reset Password”.
![Select reset password from the menu.webp](images/1_reset_user_password/2_select_reset_password_from_menu.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2023/08/reset-ad-password-3.webp) 

**Note**: The Reset Password box will show you if the account is locked out.
![Reset password box shows if the account is locked](images/1_reset_user_password/3_reset_password_box_shows_if_the_account_is_locked.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2023/08/reset-ad-password-4.webp) 

2. Enter the new password, and confirm the password.
3. If you want to require the user to change their password at the next logon 
then check the box “User must change password at next logon”.
4. Click "OK".
![Enter new password and confirm it](images/1_reset_user_password/4_enter_new_password_and_confirm_it.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2023/08/reset-ad-password-5.webp) 
5. You will get a confirmation message.

![Confirmation message](images/1_reset_user_password/5_confirmation_message.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2023/08/reset-ad-password-6.webp) 


## Add a User to a Group
1. Open the user account and click on the “member of” tab.
![Open the user account and lick on the "member of" tab](images/2_add_users_to_a_group/1_open_user_account_and_click_on_member_of_tab.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2021/01/add-user-ad-group-3.jpg) 
2. Next, click on the add button.
![Click add button](images/2_add_users_to_a_group/2_click_add_button.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2021/01/add-user-ad-group-4.jpg) 
3. You can type the full group name or type a partial name and click check names. It will give a list of all the matching groups.
![Type full group name or type partial name and click check names](images/2_add_users_to_a_group/3_type_full_group_name_or_type_partial_name_and_click_check_names.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2021/01/add-user-ad-group-5.jpg) 
4. I selected the one I wanted and clicked ok.
![Selected the one I wanted and clicked ok](images/2_add_users_to_a_group/4_selected_one_I_wanted_and_clicked_ok.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2021/01/add-user-ad-group-6.jpg) 
5. Click ok again.
![Click ok again](images/2_add_users_to_a_group/5_click_ok_again.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2021/01/add-user-ad-group-7.jpg) 
6. Click ok and you are done.
![Click ok and you are done](images/2_add_users_to_a_group/6_click_ok_and_you_are_done.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2021/01/add-user-ad-group-8.jpg) 

## Create a user account
### 1. Create New User Account
1. Right-click the OU where you want to create the new user account, select new, and then click user.

![Create a new user account](images/3_create_a_user_account/1_create_new_user_account.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2016/10/101616_1329_HowtoCreate1.jpg) 

### 2. Enter User Account Details
1. Fill out the following details for the user account.
    1. First name
    2. Last name
    3. Initials (Optional)
    4. Full name (This will fill in automatically.)
    5. User logon name
2. Below is an example of the account details filled out.

![Enter user account details](images/3_create_a_user_account/2_Enter_User_Account_Details.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2016/10/101616_1329_HowtoCreate2.jpg) 

### 3. Enter User Password
1. Enter a new password and enter it again to confirm it. 
2. It’s recommended to select “User must change password at next logon”. This will force users to change their password the first time they log on.
3. What you make the password depends on your company’s security policy.
4. Forcing users to create their own passwords is more secure and the best practice.

![Enter user password](images/3_create_a_user_account/3_enter_user_password.webp)
Image provided by [Active Directory Pro](https://activedirectorypro.com/wp-content/uploads/2016/10/101616_1329_HowtoCreate3.jpg) 

## Resources
- [How to Reset User Password in Active Directory (3 Easy Steps) - Active Directory Pro](https://activedirectorypro.com/how-to-reset-active-directory-password/) 
- [How to Add Users to Active Directory Groups - Active Directory Pro](https://activedirectorypro.com/add-users-to-active-directory-groups/) 
- [How to Create a New Active Directory User Account - Active Directory Pro](https://activedirectorypro.com/how-to-create-a-new-active-directory-user-account/) 

### Special Thanks
Thanks to [Active Directory Pro](https://activedirectorypro.com/) for providing the screenshots and instructions to perform common tasks with Active Directory.

### Inspiration
- [How we use Active Directory at work | Real world | Best Practice and tips -  East Charmer](https://youtu.be/Yb__4XttW7g?si=wIOiPu1EUFVs0sst) 