import {
	html,
	core,
	appBody
} from "../app";

class HTML {
	// Auth page templates
	notSignedUserTemplate() {
		const templateHTML = `
			<header class="header"></header>

			<main class="authorization">

				<div class="authorization__bg-video-box">
					<video class="authorization__bg-video" autoplay muted loop>
						<source src="src/videos/people-bg-video.mp4" type="video/mp4" />
					</video>
				</div>
		
				<div class="authorization__content-box">
					<div class="authorization__text-box">
						<h1 class="heading-primary margin-bottom-small">Welcome to my social media portal</h1>
						<p class="paragraph">Aliquam condimentum, dui vitae lacinia sollicitudin, est sapien bibendum mauris, ac vulputate est massa in nisi. In pellentesque vestibulum massa id interdum.</p>
					</div>
					<div class="authorization__user-asction-box" id="user-auth-box">
				</div>

			</main>

			<footer class="footer"></footer>
		`;

		appBody.innerHTML = templateHTML;
	}

	signInTemplate() {
		const userAuthBox = document.querySelector('#user-auth-box');

		const templateHTML = `
			<div class="sign-in" id="sign-in">
				<div class="sign-in" id="sign-in">
					<h2 class="heading-secondary">Sign in</h2>
					<div class="sign-in__row">
						<input class="text-field" type="text" placeholder="Your email..." id="sign-in-email" />
					</div>
					<div class="sign-in__row">
						<input class="text-field" type="password" placeholder="Your password..." id="sign-in-password" />
					</div>
					<div class="sign-in__row">
						<input class="btn btn--orange" type="submit" value="Sign in" id="sign-in-btn" />
					</div>
					<div class="sign-up__row">
						<span class="sign-up__question" id="switch-to-sign-up">I don't have an account</span>
				</div>
				<div class="sign-up__row">
					<span class="sign-up__question" id="switch-to-reset-password">I don't remember a password</span>
				</div>
			</div>
			<div class="error-box" id="error-box"></div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignUp = document.querySelector('#switch-to-sign-up');
		switchToSignUp.addEventListener('click', html.signUpTemplate);

		const switchToResetPassowrd = document.querySelector('#switch-to-reset-password');
		switchToResetPassowrd.addEventListener('click', html.resetPasswordTemplate);

		const signInBtn = document.querySelector('#sign-in-btn');
		signInBtn.addEventListener('click', core.signIn);

		html.cleanErrors();
	}

	signUpTemplate() {
		const userAuthBox = document.querySelector('#user-auth-box');

		const templateHTML = `
			<div class="sign-up" id="sign-up">
				<h2 class="heading-secondary">Sign up</h2>

				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="First name.." id="sign-up-name" />
				</div>
				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="Your email..." id="sign-up-email" />
				</div>
				<div class="sign-up__row">
					<input class="text-field" type="password" placeholder="Your password..." id="sign-up-password" />
				</div>
				<div class="sign-up__row">
					<input class="btn btn--orange" type="submit" value="Sign up" id="sign-up-btn" />
				</div>

				<div class="sign-up__row">
					<div class="sign-up__cell">
						<hr />
					</div>
					<div class="sign-up__cell">
						<span>or</span>
					</div>
					<div class="sign-up__cell">
						<hr />
					</div>
				</div>

				<div class="sign-up__row">
					<a href="#" class="btn btn--facebook" id="continue-with-facebook">
						<i class="fa fa-facebook visible-xs"></i>
						<span class="hidden-xs">Continue with Facebook</span>
					</a>
					</div>
					<div class="sign-up__row">
						<a href="#" class="btn btn--google" id="continue-with-google">
							<i class="fa fa-google-plus visible-xs"></i>
							<span class="hidden-xs">Continue with Google</span>
						</a>
					</div>
					<div class="sign-up__row">
						<span class="sign-up__question" id="switch-to-sign-in">I have an account</span>
					</div>
					<div class="error-box" id="error-box"></div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignIn = document.querySelector('#switch-to-sign-in');
		switchToSignIn.addEventListener('click', html.signInTemplate);

		const signUpBtn = document.querySelector('#sign-up-btn');
		signUpBtn.addEventListener('click', core.signUp);

		const continueWithFacebookBtn = document.querySelector('#continue-with-facebook');
		continueWithFacebookBtn.addEventListener('click', core.continueWithFacebook);

		const continueWithGoogleBtn = document.querySelector('#continue-with-google');
		continueWithGoogleBtn.addEventListener('click', core.continueWithGoogle);

		html.cleanErrors();
	}

	resetPasswordTemplate() {
		const userAuthBox = document.querySelector('#user-auth-box');

		const templateHTML = `
			<div class="reset-password" id="reset-password-template">
				<div class="sign-up__row">
					<input class="text-field" type="text" placeholder="Your mail-address..." id="reset-password-mail" />
				</div>
				<div class="sign-up__row">
					<input class="btn btn--orange" type="submit" value="Reset" id="reset-password-btn" />
				</div>
				<div class="sign-up__row">
					<span class="sign-up__question" id="switch-to-log-in-area">Back to sign in area</span>
				</div>
				<div class="error-box" id="error-box"></div>
			</div>
		`;

		userAuthBox.innerHTML = templateHTML;

		const switchToSignIn = document.querySelector('#switch-to-log-in-area');
		switchToSignIn.addEventListener('click', html.signInTemplate);

		const resetUserPasswordBtn = document.querySelector('#reset-password-btn');
		resetUserPasswordBtn.addEventListener('click', core.resetUserPassword);

		html.cleanErrors();
	}

	hideResetUserPassword() {
		const resetPasswordTemplateHTML = document.querySelector('#reset-password-template');
		resetPasswordTemplateHTML.innerHTML = "";
	}

	cleanErrors() {
		const errorTemplateHTML = document.querySelector('#error-box');

		document.body.classList.remove('add-error');
		errorTemplateHTML.innerHTML = "";
	}

	displayError(errors) {
		const errorTemplateHTML = document.querySelector('#error-box');

		document.body.classList.add('add-error');
		errorTemplateHTML.innerHTML = errors;
	}

	cleanSuccess() {
		document.body.classList.remove('add-success');
		errorTemplateHTML.innerHTML = "";
	}

	displaySuccess(success) {

	}

	// Pages elements tempalates
	headerTemplete(userName) {
		const header = document.querySelector('#app-header');
		let icon = 'src/images/user-icon.png';

		const templateHTML = `
		<div class="header__container">
			<div class="header__logo-box">
				<img src="src/images/app-icon.png" alt="Social media logo">
			</div>
			<div class="header__search-box">
				<input type="text" placeholder="Search..">
			</div>
			<div class="header__user-icon-box">
				<figure class="header__user-picture-box" id="header-user-avatar">
					<img src="${icon}" alt="User profile image">
				</figure>
			</div>
		</div>
		`;

		header.innerHTML = templateHTML;

		const avatar = document.querySelector('#header-user-avatar');
		avatar.addEventListener('click', html.mainPageTemplate);
	}

	profileIntroTemplete() {
		const asideProfilIntro = document.querySelector('#aside-profile-intro');
		const templateHTML = `
			<div class="profile-intro__row">
				<h2>Profil intro</h2>
			</div>
			<div class="profile-intro__row">
				<span class="profile-intro__sub-titile">About me:</span>
				<p>My name is Patryk. I'm 25 years old and I'm enyoing of traveling and sighseeing. I love hitch-hiking, meet new people and get to know new facts about our planet!</p>
			</div>
			<div class="profile-intro__row">
				<span class="profile-intro__sub-titile">Visited places:</span>
				<p>Poland, Hungary, Cyprus, Turkey, Lanzarote, Teneryfa, Kosovo, Serbia, Montenegro, Croatia, Albania, Slovakia, Kazakhstan, Ukraine, Germany, Italy, Israel</p>
			</div>
			<div class="profile-intro__row">
				<span class="profile-intro__sub-titile">Want to see:</span>
				<p>Argentina, Columbia, UK, Uzbekistan, Iran, Mongolia</p>
			</div>
		`;

		asideProfilIntro.innerHTML = templateHTML;
	}

	addPostTemplate() {
		const addPostContainer = document.querySelector('#add-post-container');
		const templateHTML = `
			<div class="add-post__content">
				<textarea class="add-post__text-area" id="add-post-textarea" placeholder="Your post..."></textarea>
				<input class="btn btn--orange" id="add-post-btn" type="submit" value="Post">
			</div>
			<div class="error-box"></div>
		`;

		addPostContainer.innerHTML += templateHTML;

		const addPostBtn = document.querySelector('#add-post-btn');
		addPostBtn.addEventListener('click', core.addPostToDatabase);
	}

	wallTemplate() {
		const postsContainer = document.querySelector('#posts-container');
		const templateHTML = `
			<article class="posts__single-post">
				<div class="posts__info">
					<div class="posts__avatar">
						<img src="src/images/user-icon.png" alt="author">
					</div>
					<div class="posts__author">
						<h2>Patryk Białek</h2>
						<time datetime="2008-02-14 20:00">5 hours ago</time>
					</div>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at iaculis elit, vel pulvinar felis. Morbi vestibulum suscipit erat, nec feugiat urna ultrices vitae. Donec vitae pharetra erat, sit amet congue leo. Vivamus mattis urna arcu, at maximus enim imperdiet ut.</p>				
			</article>
		`;

		postsContainer.innerHTML += templateHTML;
	}

	settingsTemplate() {
		const settingsContainer = document.querySelector('#profile-settings');
		const templateHTML = `
			<div class="settings__row">
				<h2>Settings</h2>
			</div>
			<div class="settings__row">
				<span class="settings__option">Home Page</span>
			</div>
			<div class="settings__row">
				<span class="settings__option">Your Profile</span>
			</div>
			<div class="settings__row">
				<span class="settings__option">Your Fiends</span>
			</div>
			<div class="settings__row">
				<span class="settings__option">Account Setting</span>
			</div>
			<div class="settings__row">
				<input class="btn btn--orange" type="submit" id="sign-out-btn" value="Sign Out">
			</div>
		`;

		settingsContainer.innerHTML = templateHTML;

		const signOutBtn = document.querySelector('#sign-out-btn');
		signOutBtn.addEventListener('click', core.signOut);
	}

	userSingedInTemplete(userName) {
		const bodyTemplate = document.querySelector('#app-body');
		const templateHTML = `
			<header class="header" id="app-header"></header>
			<main class="main" id="app-main"></main>
		`;

		bodyTemplate.innerHTML = templateHTML;
		html.headerTemplete(userName);
	}

	// Pages Templates
	mainPageTemplate() {
		const main = document.querySelector('#app-main');
		main.innerHTML = `
			<aside class="profile-intro" id="aside-profile-intro"></aside>

			<div class="posts" id="posts-section">
				<div class="add-post" id="add-post-container"></div>
				<section class="posts__container" id="posts-container"></section>
			</div>

			<aside class="settings" id="profile-settings"></aside>
		`;

		html.profileIntroTemplete();
		html.addPostTemplate();
		html.settingsTemplate();
		html.wallTemplate();
	}

	errorTemplate() {
		const templateHTML = ``;
	}

	successTemplete() {
		const templateHTML = ``;
	}
}

export {
	HTML
};