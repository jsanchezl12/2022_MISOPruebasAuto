const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('.email');
    await element.setValue(email);
    return await this.driver.saveScreenshot('./login/email.png')

});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('.password');
    await element.setValue(password);
    return await this.driver.saveScreenshot('./login/password.png')
});

When('I click next', async function() {
    let element = await this.driver.$('.login');
    await element.click();
    return await this.driver.saveScreenshot('./login/next.png')
})

When('I click members button', async function() {
    let element = await this.driver.$('[href="#/members/"]');
    await element.click();
    return await this.driver.saveScreenshot('./members/members_button.png')
})

When('I click new member button', async function() {
    let element = await this.driver.$('.gh-btn-green');
    await element.click();
    return await this.driver.saveScreenshot('./members/new_member_button.png')
})

When('I enter name new memeber {kraken-string}', async function (member_name) {
    let element = await this.driver.$('#member-name');
    await element.setValue(member_name);
    return await this.driver.saveScreenshot('./members/enter_name_member.png')

})

When('I enter email new memeber {kraken-string}', async function (member_email) {
    let element = await this.driver.$('#member-email');
    await element.setValue(member_email);
    return await this.driver.saveScreenshot('./members/email_new_member.png')

})

When('I enter labels new memeber {kraken-string}', async function (member_labels) {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    await element.setValue(member_labels);
    return await this.driver.saveScreenshot('./members/labels_new_member.png')

})

When('I enter notes new memeber {kraken-string}', async function (member_notes) {
    let element = await this.driver.$('#member-note');
    await element.setValue(member_notes);
    return await this.driver.saveScreenshot('./members/notes_new_member.png')

})

When('I click save button', async function() {
    let element = await this.driver.$('.gh-btn-blue');
    await element.click();
    return await this.driver.saveScreenshot('./members/save_button.png');
})


Then('I confirm member created', async function () {
    let element = await this.driver.$("#members_svg__Regular");
    await element.click();
    return await this.driver.saveScreenshot('./members/confirm_member_created.png');

});

When('I click on memeber list item', async function() {
    let element = await this.driver.$('.gh-members-list-name');
    await element.click();
    return await this.driver.saveScreenshot('./members/member_list_item.png');

})

When('I click on settings', async function() {
    let element = await this.driver.$('.dropdown');
    await element.click();
    return await this.driver.saveScreenshot('./otros/settings.png');

})

When('I click on I click on delete memeber', async function() {
    let element = await this.driver.$('//*[@id="ember71"]/li[2]');
    await element.click();
    return await this.driver.saveScreenshot('./members/delete_member.png');

})

When('I click search members {kraken-string}', async function (member_name_search) {
    let element = await this.driver.$('.gh-members-list-searchfield');
    await element.setValue(member_name_search);
    return await this.driver.saveScreenshot('./members/search_member.png');

})

When('I click filter button', async function() {
    let element = await this.driver.$('.gh-btn-action-icon');
    await element.click();
    return await this.driver.saveScreenshot('./members/filter_button_member.png');

})

When('I click filter item', async function() {
    let element = await this.driver.$('.ember-view');
    await element.click();
    return await this.driver.saveScreenshot('./members/filter_item.png');

})

When('I click filter operator', async function() {
    let element = await this.driver.$('.gh-select');
    await element.click();
    return await this.driver.saveScreenshot('./members/filter_operator.png');

})

When('I enter filter parameter {kraken-string}', async function (member_name_filter) {
    let element = await this.driver.$('.gh-input');
    await element.setValue(member_name_filter);
    return await this.driver.saveScreenshot('./members/filter_parameter.png');

})

// Andres Steps 

Given('I navigate to main page {string}', async function (page) {
    await this.driver.url(page);
    return await this.driver.saveScreenshot('./pages/main_page.png');
});

When('I click Pages', async function() {
    let element = await this.driver.$('#ember28');
    await element.click();
    return await this.driver.saveScreenshot('./pages/click_pages.png');

})

When('I click New-Page', async function() {
    let element = await this.driver.$('.gh-btn-primary');
    await element.click();
    return await this.driver.saveScreenshot('./pages/click_new_page.png');

})


When('I written Page_title {string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title');
    await element.setValue(title);
    return await this.driver.saveScreenshot('./pages/write_page_title.png');

});

When('I written Page_content {string}', async function (content) {
    let element = await this.driver.$('.koenig-editor__editor');
    await element.setValue(content);
    return await this.driver.saveScreenshot('./pages/write_page_content.png');

});

When('I clear Page_content', async function () {
    let element = await this.driver.$('.koenig-editor__editor');
    await element.clearValue();
    return await this.driver.saveScreenshot('./pages/clear_page_content.png');

});


When('I click Publish_drop', async function() {
    let element = await this.driver.$('.ember-basic-dropdown-trigger');
    await element.click();
    return await this.driver.saveScreenshot('./pages/publish_drop.png');

})

When('I click Publish', async function() {
    let element = await this.driver.$('.gh-publishmenu-button');
    await element.click();
    return await this.driver.saveScreenshot('./pages/click_publish.png');

})


Then('I see that the page is published', async function () {
    let element = await this.driver.$('div.gh-editor-post-status  > span > div');
    expect(await element.getText()).to.equal('Published');
    return await this.driver.saveScreenshot('./pages/page_published.png');


  });

  When('I edit last page', async function () {
    let element = await this.driver.$('.gh-posts-list-item > a > .gh-content-entry-title');
    await element.click();
    return await this.driver.saveScreenshot('./pages/edit_last_oage.png');

});


When('I click Page settings', async function() {
    let element = await this.driver.$('.settings-menu-toggle > span > svg');
    await element.click();
    return await this.driver.saveScreenshot('./pages/page_settings.png');

})

When('I click Delete Page', async function() {
    let element = await this.driver.$('form > .gh-btn > span');
    await element.click();
    return await this.driver.saveScreenshot('./pages/delete_pag.png');

})

When('I click Delete', async function() {
    let element = await this.driver.$('.gh-btn-red');
    await element.click();
    return await this.driver.saveScreenshot('./otros/click_delete.png');

})


When('I select all pages', async function() {
    let element = await this.driver.$('.ember-power-select-selected-item');
    await element.click();
    return await this.driver.saveScreenshot('./pages/all_pages.png');

})


When('I select all published pages', async function() {
    let element = await this.driver.$('.ember-power-select-option[data-option-index="2"]');
    await element.click();
    return await this.driver.saveScreenshot('./pages/all_published_pages.png');

})

// Juan Steps

When('I go to tags element', async function(){
    let element = await this.driver.$('[href="#/tags/"]');
    await element.click();
    return await this.driver.saveScreenshot('./tags/tags_element.png');

});

When('I select first element of list tags', async function(){
    let element = await this.driver.$('.gh-list-data');
    await element.click();
    return await this.driver.saveScreenshot('./tags/first_element_list_tags.png');

});

When('I select meta btn', async function(){
    let element = await this.driver.$('.gh-btn-expand');
    await element.click();
    return await this.driver.saveScreenshot('./tags/meta_btn.png');

});

When('I set meta title as {kraken-string}', async function (title_metatag) {
    let element = await this.driver.$('#meta-title');
    await element.setValue(title_metatag);
    return await this.driver.saveScreenshot('./tags/meta_title.png');

});

When('I set meta desc as {kraken-string}',async function(desc_metatag){
    let element = await this.driver.$('#meta-description');
    await element.setValue(desc_metatag);
    return await this.driver.saveScreenshot('./tags/meta_desc.png');

});

When('I select twitter btn', async function(){
    let element = await this.driver.$('.gh-btn-expand');
    await element.click();
    return await this.driver.saveScreenshot('./tags/twitter_btn.png');

});

When('I set twitter title as {kraken-string}', async function (title_twittertag) {
    let element = await this.driver.$('#twitter-title');
    await element.setValue(title_twittertag);
    return await this.driver.saveScreenshot('./tags/twitter_title.png');

});

When('I set twitter desc as {kraken-string}',async function(desc_twittertag){
    let element = await this.driver.$('#twitter-description');
    await element.setValue(desc_twittertag);
    return await this.driver.saveScreenshot('./tags/twitter_desc.png');

});

When('I select facebook btn', async function(){
    let element = await this.driver.$('.gh-btn-expand');
    await element.click();
    return await this.driver.saveScreenshot('./tags/facebook_btn.png');

});

When('I set facebook title as {kraken-string}', async function (title_facebooktag) {
    let element = await this.driver.$('#og-description');
    await element.setValue(title_facebooktag);
    return await this.driver.saveScreenshot('./tags/facebook_title.png');

});

When('I set facebook desc as {kraken-string}',async function(desc_facebooktag){
    let element = await this.driver.$('#og-title');
    await element.setValue(desc_facebooktag);
    return await this.driver.saveScreenshot('./tags/facebook_desc.png');

});

When('I check data {kraken-string} saved from metatag',async function(title_metatag){
    let element = await this.driver.$('.gh-seo-preview-title');
    expect(await element.getText()).to.equal(title_metatag);
    return await this.driver.saveScreenshot('./tags/check_data.png');

});

//david Steps

When('I create post', async function (){
    let element = await this.driver.$('#ember29');
    await element.click();
    return await this.driver.saveScreenshot('./post/create_post.png');

});

Then('I write a post title {kraken-string}', async function (title){
    let element1 = await this.driver.$('.ember-text-area');
    await element1.setValue(title);
    return await this.driver.saveScreenshot('./post/write_post_title.png');

});

Then('I write a post description {kraken-string}', async function (description){
    let element1 = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]');
    await element1.setValue(description);
    return await this.driver.saveScreenshot('./post/write_post_description.png');

});
When('I click to create a post', async function (){
    let element = await this.driver.$('.gh-publishmenu');
    await element.click();
    return await this.driver.saveScreenshot('./post/create_post.png');

});

When('I publish a post', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/publish_post.png');

});

When('I click post', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[1]/ul[2]/li[2]/a[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/click_post.png');

});

When('I click a post created', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[2]/p[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/click_post_created.png');

});

When('I click update', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/click_update.png');

});

Then('I update the post', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/update_post.png');

});

When('I go back to post menu', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/div[1]/div[1]/a[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/back_post_menu.png');

});

When('I click on post settings', async function (){
    let element = await this.driver.$('.post-settings');
    await element.click();
    return await this.driver.saveScreenshot('./post/post_settings.png');

});

When('I click delete button', async function (){
    let element = await this.driver.$('.gh-btn=Delete post');
    await element.click();
    return await this.driver.saveScreenshot('./post/delete_button_post.png');

});

Then('I delete post', async function (){
    let element = await this.driver.$('.gh-btn=Delete');
    await element.click();
    return await this.driver.saveScreenshot('./post/delete_post.png');

});

When('I click Unpublished', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/click_unpublished.png');

});
When('I confirm Unpublished', async function (){
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    await element.click();
    return await this.driver.saveScreenshot('./post/confirm_unpublished.png');

});

// Staff Escenarios
When('I click staff elements', async function () {
    let element = await this.driver.$('[href="#/staff/"]');
    await element.click();
    return await this.driver.saveScreenshot('./staff/staff_elements.png')

});

When('I click green button', async function () {
    let element = await this.driver.$('.gh-btn-green');
    await element.click();
    return await this.driver.saveScreenshot('./staff/green_button.png')

});


When('I write email field {kraken-string}', async function (email_field) {
    let element = await this.driver.$('#new-user-email');
    await element.setValue(email_field);
    return await this.driver.saveScreenshot('./staff/email_field.png')
});
/*
When('I choose a role field}', async function () {
    let element = await this.driver.$('option[value='6275bce...']');
    await element.setValue(email_field);
    await this.driver.saveScreenshot('./staff/email_field.png')
});

"option[value='6275bce...']"
*/
When('I click green button invitation', async function () {
    let element = await this.driver.$('.gh-btn-icon');
    await element.click();
    return await this.driver.saveScreenshot('./staff/click_button_invitation.png')

});



When('I click an active user', async function () {
    let element = await this.driver.$('.apps-card-app');
    await element.click();
    return await this.driver.saveScreenshot('./staff/click_button_invitation.png')

});


When('I clear a field', async function () {
    let element = await this.driver.$('#user-name');
    await element.clearValue();
    return await this.driver.saveScreenshot('./staff/click_button_invitation.png')

});


When('I write a full name field {kraken-string}', async function (email_field) {
    let element = await this.driver.$('#user-name');
    await element.setValue(email_field);
    return await this.driver.saveScreenshot('./staff/click_button_invitation.png')

});

When('I click the save button', async function () {
    let element = await this.driver.$('.gh-btn-icon');
    await element.click();
    return await this.driver.saveScreenshot('./staff/click_button_invitation.png')

});


When('I click revoke staff', async function () {
    let element = await this.driver.$('[href="#revoke"]');
    await element.click();
    return await this.driver.saveScreenshot('./staff/revoke_staff.png');

});
