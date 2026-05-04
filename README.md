# SyIAR Gemilang (Phase 1 - Siap Deploy)

Monorepo berisi:
- `frontend/`: Express SSR + EJS + Tailwind + middleware RBAC.
- `backend/`: CodeIgniter 4 API skeleton + migration awal RBAC.

## Fitur yang sudah diimplementasikan
- Login flow Express -> CI4 API dengan token cookie `httpOnly`.
- Permission guard di route SSR (`penilaian.read`, `rbac.manage`).
- API client Axios dengan Authorization interceptor.
- Migration awal tabel inti: `users`, `roles`, `permissions`.
- Contoh endpoint auth API `POST /api/auth/login`.

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run build:css
npm run dev
```

### Backend (CI4)
1. Buat project CI4 starter lalu sinkronkan isi folder `backend/app` dari repo ini.
2. Jalankan migration:
```bash
php spark migrate
```
3. Tambahkan route API:
```php
$routes->group('api', static function($routes) {
  $routes->post('auth/login', 'Api\\AuthController::login');
});
```

## Testing
```bash
cd frontend && npm test
php -l backend/app/Controllers/Api/AuthController.php
php -l backend/app/Filters/AuthFilter.php
php -l backend/app/Database/Migrations/2026-05-04-000001_InitSyiarSchema.php
```
