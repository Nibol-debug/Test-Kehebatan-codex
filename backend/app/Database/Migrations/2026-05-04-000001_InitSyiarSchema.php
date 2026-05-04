<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class InitSyiarSchema extends Migration
{
    public function up()
    {
        $this->forge->addField(['id' => ['type' => 'INT', 'auto_increment' => true], 'nama' => ['type' => 'VARCHAR', 'constraint' => 100], 'email' => ['type' => 'VARCHAR', 'constraint' => 120, 'unique' => true], 'password_hash' => ['type' => 'VARCHAR', 'constraint' => 255], 'is_active' => ['type' => 'BOOLEAN', 'default' => 1], 'deleted_at' => ['type' => 'DATETIME', 'null' => true], 'created_at' => ['type' => 'DATETIME', 'null' => true], 'updated_at' => ['type' => 'DATETIME', 'null' => true]]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('users');

        $this->forge->addField(['id' => ['type' => 'INT', 'auto_increment' => true], 'nama' => ['type' => 'VARCHAR', 'constraint' => 100], 'kode' => ['type' => 'VARCHAR', 'constraint' => 50, 'unique' => true]]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('roles');

        $this->forge->addField(['id' => ['type' => 'INT', 'auto_increment' => true], 'kode' => ['type' => 'VARCHAR', 'constraint' => 100, 'unique' => true], 'modul' => ['type' => 'VARCHAR', 'constraint' => 60], 'aksi' => ['type' => 'VARCHAR', 'constraint' => 60], 'deskripsi' => ['type' => 'TEXT', 'null' => true]]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('permissions');
    }

    public function down()
    {
        $this->forge->dropTable('permissions');
        $this->forge->dropTable('roles');
        $this->forge->dropTable('users');
    }
}
