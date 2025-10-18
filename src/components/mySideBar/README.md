# MySideBar Component

Modern ve responsive bir sidebar komponenti.

## Özellikler

- ✅ Soldan açılır animasyon
- ✅ Overlay ile dışarıya tıklayınca kapanma
- ✅ Scrollable menü listesi (gerektiğinde)
- ✅ Logo desteği (PNG formatında)
- ✅ Material-UI ikonları
- ✅ Gradient tasarım
- ✅ Responsive tasarım
- ✅ Smooth animasyonlar

## Kullanım

```jsx
import MySideBar from './components/mySideBar/MySideBar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setSidebarOpen(open);
  };

  return (
    <div>
      <button onClick={toggleSidebar(true)}>Menüyü Aç</button>
      <MySideBar open={sidebarOpen} toggleDrawer={toggleSidebar} />
    </div>
  );
}
```

## Logo Ekleme

`public` klasörüne `logo.png` adında bir dosya ekleyin. Eğer logo bulunamazsa, otomatik olarak "KABINARI" yazısı gösterilir.

## Menü Öğelerini Düzenleme

`MySideBar.jsx` dosyasındaki `sideBarItems` dizisini düzenleyerek menü öğelerini değiştirebilirsiniz:

```jsx
const sideBarItems = [
  { text: "Yeni Proje", icon: <CreateNewFolder />, route: "/Yeni-Proje" },
  { text: "Tüm Projeler", icon: <AutoAwesomeMotion />, route: "/Tüm-Projeler" },
  // Daha fazla öğe ekleyebilirsiniz...
];
```

## Stil Özelleştirme

`MySideBar.css` dosyasındaki class'ları düzenleyerek görünümü özelleştirebilirsiniz. Tüm class'lar `mySideBar-` öneki ile başlar.

### Ana Class'lar:
- `mySideBar-container`: Ana sidebar container
- `mySideBar-header`: Logo ve kapatma butonu bölümü
- `mySideBar-menu-container`: Scrollable menü bölümü
- `mySideBar-footer`: Çıkış butonu bölümü
- `mySideBar-overlay`: Arka plan overlay

## Bağımlılıklar

- React Router DOM (navigate için)
- Firebase Auth (çıkış yapma için)
- Material-UI Icons
