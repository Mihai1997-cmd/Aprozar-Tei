import { useState, useEffect } from 'react';
import { ShoppingBasket, Leaf, Award, MapPin, Clock, Heart } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream text-dark">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-beige/50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="text-primary-green" size={28} strokeWidth={2.5} />
            <h1 className="text-2xl font-serif font-bold text-primary-green">Aprozarul Tei</h1>
          </div>
          <a
            href="#viziteaza"
            className="bg-primary-green text-cream px-6 py-2.5 rounded-lg font-medium hover:bg-secondary-green transition-all duration-300 hover:shadow-lg active:scale-98"
          >
            Vino la aprozar
          </a>
        </div>
      </header>

      <section className="relative h-screen min-h-[600px] overflow-hidden group">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: 'url(/aprozar_tei_afara.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-green/55 to-primary-green/25 group-hover:from-primary-green/65 group-hover:to-primary-green/35 transition-all duration-700" />

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6 leading-tight drop-shadow-lg">
              Produse proaspete, ca pe vremuri.
            </h2>
            <p className="text-xl md:text-2xl text-cream/95 mb-8 leading-relaxed drop-shadow-md">
              Fructe și legume zilnic. Mezeluri tradiționale. Aproape de tine, în cartierul Tei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="#viziteaza"
                className="bg-cream text-primary-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-warm-beige transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-98"
              >
                Vino la aprozar
              </a>
              <button className="bg-primary-green/90 text-cream px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary-green transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-98 border-2 border-cream/20">
                Vezi cum ajungi
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-cream/90 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cream rounded-full" />
                Stoc proaspăt în fiecare zi
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cream rounded-full" />
                Prețuri corecte
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cream rounded-full" />
                Oameni din cartier
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="de-ce"
        data-animate
        className={`py-20 bg-cream transition-all duration-700 ${isVisible['de-ce'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-green text-center mb-4">
            De ce Aprozarul Tei?
          </h2>
          <p className="text-center text-dark/70 text-lg mb-16 max-w-2xl mx-auto">
            Pentru că ne pasă de calitate, de tradiție și de oamenii din cartier.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Leaf,
                title: 'Fructe și legume proaspete',
                description: 'Aprovizionare zilnică cu produse de sezon, direct de la furnizori de încredere.'
              },
              {
                icon: ShoppingBasket,
                title: 'Mezeluri tradiționale românești',
                description: 'Specialități autentice, preparate după rețete tradiționale, cu ingrediente de calitate.'
              },
              {
                icon: Award,
                title: 'Stoc proaspăt în fiecare zi',
                description: 'Verificăm zilnic calitatea produselor pentru ca tu să pleci acasă cu încredere.'
              },
              {
                icon: Heart,
                title: 'Curat, organizat, prietenos',
                description: 'Un magazin îngrijit unde te simți ca acasă și unde ești servit cu zâmbetul pe buze.'
              },
              {
                icon: MapPin,
                title: 'Aproape de tine',
                description: 'În inima cartierului Tei, la doi pași de casă. Comod și ușor accesibil.'
              },
              {
                icon: Clock,
                title: 'Servire locală, omenească',
                description: 'Nu ești un număr pentru noi. Te cunoaștem, te respectăm, te servim cu plăcere.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-warm-beige/30 border border-warm-beige rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-secondary-green/30"
              >
                <div className="bg-primary-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary-green" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-green mb-3">
                  {item.title}
                </h3>
                <p className="text-dark/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="produse"
        data-animate
        className={`py-20 bg-warm-beige/20 transition-all duration-700 ${isVisible['produse'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-green text-center mb-16">
            Ce găsești la noi
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Fructe', emoji: '🍎' },
              { name: 'Legume', emoji: '🥕' },
              { name: 'Verdeață', emoji: '🌿' },
              { name: 'Mezeluri', emoji: '🥩' }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-cream border-2 border-warm-beige rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-secondary-green"
              >
                <div className="text-6xl mb-4">{category.emoji}</div>
                <h3 className="text-2xl font-serif font-bold text-primary-green">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="incredere"
        data-animate
        className={`py-20 bg-cream transition-all duration-700 ${isVisible['incredere'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-green text-center mb-4">
            Tradiție și încredere
          </h2>
          <p className="text-center text-dark/70 text-lg mb-16 max-w-2xl mx-auto">
            Un magazin de cartier cum își dorește orice familie.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-warm-beige/30 border border-warm-beige rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">
                Produse locale, furnizori cunoscuți
              </h3>
              <p className="text-dark/80 leading-relaxed mb-4">
                Lucrăm doar cu furnizori verificați, mulți dintre ei producători locali care își respectă meseria și produsele.
              </p>
              <p className="text-dark/80 leading-relaxed">
                Știm de unde vin produsele noastre și ne asigurăm că ajung la tine în cea mai bună formă.
              </p>
            </div>

            <div className="bg-warm-beige/30 border border-warm-beige rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">
                Calitate, nu cantitate
              </h3>
              <p className="text-dark/80 leading-relaxed mb-4">
                Preferăm să avem mai puține produse, dar de calitate superioară, decât rafturi pline cu mărfuri mediocre.
              </p>
              <p className="text-dark/80 leading-relaxed">
                Fiecare produs este selectat cu grijă pentru a-ți oferi cea mai bună experiență de cumpărături.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-warm-beige">
              <img
                src="/aprozar_tei_intrare.jpg"
                alt="Interior magazin cu produse proaspete"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-warm-beige">
              <img
                src="/aprozar_tei_mezeluri.jpg"
                alt="Mezeluri tradiționale românești"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="viziteaza"
        data-animate
        className={`py-20 bg-warm-beige/20 transition-all duration-700 ${isVisible['viziteaza'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-green text-center mb-4">
            Unde ne găsești
          </h2>
          <p className="text-center text-dark/70 text-lg mb-12">
            Aproape, ușor de ajuns pe jos, în cartierul Tei.
          </p>

          <div className="max-w-3xl mx-auto bg-cream border-2 border-warm-beige rounded-2xl p-10 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-primary-green flex-shrink-0 mt-1" size={28} strokeWidth={2} />
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">
                  Aprozarul Tei
                </h3>
                <p className="text-dark/80 text-lg">
                  Bulevardul Lacul Tei, nr. 75, București<br />
                  {/*<span className="text-sm text-dark/60">(reper local: [specificați reper cunoscut])</span>*/}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <Clock className="text-primary-green flex-shrink-0 mt-1" size={28} strokeWidth={2} />
              <div>
                <h3 className="text-xl font-serif font-bold text-primary-green mb-2">
                  Program
                </h3>
                <p className="text-dark/80">
                  Luni - Sâmbătă: 08:00 - 20:00<br />
                  Duminică: 08:00 - 14:00
                </p>
              </div>
            </div>

            <a
                href="https://maps.app.goo.gl/35kRJUAm3c54KBYP7"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-primary-green text-cream px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-green transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-98"
            >
              Deschide harta
            </a>

          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-green text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Susține comerțul local.<br/>Te așteptăm la Aprozarul Tei.
          </h2>
          <p className="text-xl md:text-2xl text-cream/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Treci azi pe la noi — pleci cu sacoșa plină și cu încredere.
          </p>
          <a
            href="#viziteaza"
            className="inline-block bg-cream text-primary-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-warm-beige transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-98"
          >
            Vino astăzi la aprozar
          </a>
        </div>
      </section>

      <footer className="bg-dark/95 text-cream/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <ShoppingBasket className="text-cream" size={24} strokeWidth={2.5} />
              <span className="text-xl font-serif font-bold text-cream">Aprozarul Tei</span>
            </div>
            <p className="text-center text-cream/70">
              © 2026 Aprozarul Tei. Magazinul tău de cartier.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
