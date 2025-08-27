import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App template', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('muestra el título principal en el header', () => {
    expect(
      screen.getByRole('heading', { name: /welcome to my react app/i })
    ).toBeInTheDocument();
  });

  test('navbar con enlaces a secciones clave', () => {
    const about = screen.getByRole('link', { name: /about/i });
    const features = screen.getByRole('link', { name: /features/i });
    const gallery = screen.getByRole('link', { name: /gallery/i });
    const faq = screen.getByRole('link', { name: /faq/i });
    const contact = screen.getByRole('link', { name: /contact/i });

    expect(about).toHaveAttribute('href', '#about');
    expect(features).toHaveAttribute('href', '#features');
    expect(gallery).toHaveAttribute('href', '#gallery');
    expect(faq).toHaveAttribute('href', '#faq');
    expect(contact).toHaveAttribute('href', '#contact');
  });

  test('hero con copy y CTA', () => {
    expect(
      screen.getByRole('heading', { name: /build something amazing/i })
    ).toBeInTheDocument();

    const cta = screen.getByRole('button', { name: /get started/i });
    expect(cta).toBeInTheDocument();
  });

  test('about presente con descripción', () => {
    const aboutHeading = screen.getByRole('heading', { name: /about/i });
    expect(aboutHeading).toBeInTheDocument();
    // Texto genérico presente
    expect(
      screen.getByText(/This section describes what your app is about/i)
    ).toBeInTheDocument();
  });

  test('features lista de al menos 4 elementos', () => {
    const featuresHeading = screen.getByRole('heading', { name: /features/i });
    const featuresSection = featuresHeading.closest('section');
    expect(featuresSection).toBeInTheDocument();

    const items = within(featuresSection!).getAllByRole('listitem');
    expect(items.length).toBeGreaterThanOrEqual(4);
  });

  test('gallery muestra 3 imágenes', () => {
    const galleryHeading = screen.getByRole('heading', { name: /gallery/i });
    const gallerySection = galleryHeading.closest('section');
    expect(gallerySection).toBeInTheDocument();

    const images = within(gallerySection!).getAllByRole('img');
    expect(images.length).toBe(3);

    // (Opcional) verificar alts básicos
    expect(images[0]).toHaveAttribute('alt', expect.stringMatching(/sample/i));
  });

  test('FAQ permite expandir una pregunta', async () => {
    const user = userEvent.setup();
    const faqHeading = screen.getByRole('heading', { name: /faq/i });
    const faqSection = faqHeading.closest('section');
    expect(faqSection).toBeInTheDocument();

    // El <summary> expone role="button"
    const q = within(faqSection!).getByRole('button', { name: /what is this app\?/i });
    await user.click(q);

    expect(
      within(faqSection!).getByText(/react starter template/i)
    ).toBeInTheDocument();
  });

  test('contact incluye campos Name, Email y Message', () => {
    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);

    expect(name).toHaveAttribute('type', 'text');
    expect(email).toHaveAttribute('type', 'email');
    // textarea también es role="textbox"
    expect(message.tagName.toLowerCase()).toBe('textarea');
  });

  test('footer muestra el año actual dinámicamente', () => {
    const year = new Date().getFullYear().toString();
    expect(screen.getByText((content) => content.includes(year))).toBeInTheDocument();
  });
});
