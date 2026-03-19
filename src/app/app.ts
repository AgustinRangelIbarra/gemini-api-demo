import { Component, signal } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Chatbot } from './shared/chat/chatbot/chatbot';
import { SocialGreetings } from './shared/social-greetings/social-greetings';
import { SectionWhoWeAre } from './features/home-page/components/section-who-we-are/section-who-we-are';

@Component({
  selector: 'app-root',
  imports: [Navbar, Chatbot, SocialGreetings, SectionWhoWeAre],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('salesforce-demo-spa');
}
