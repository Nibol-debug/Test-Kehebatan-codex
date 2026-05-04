<?php
namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;

class AuthController extends ResourceController
{
    public function login()
    {
        $email = $this->request->getJSON(true)['email'] ?? null;
        if (!$email) {
            return $this->failValidationErrors('Email wajib diisi');
        }

        return $this->respond([
            'token' => base64_encode('dummy-jwt-token'),
            'user' => ['id' => 1, 'nama' => 'Demo User', 'email' => $email],
            'permissions' => ['penilaian.read', 'penilaian.create', 'rbac.manage']
        ]);
    }
}
