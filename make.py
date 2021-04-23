import os
import shutil
import subprocess


def main():
    pull_sources()
    generate_java_doc()
    generate_grpc_doc()

def pull_sources():
    if not os.path.exists('build'):
        os.makedirs('build')
    if os.path.exists('build/olca-modules'):
        subprocess.call('git pull', cwd='./build/olca-modules')
    else:
        subprocess.call([
            'git',
            'clone',
            'https://github.com/GreenDelta/olca-modules.git',
            'build/olca-modules'])


def generate_java_doc():
    mods_path = './build/olca-modules'

    # delete the old doc
    target_dir = './docs/java'
    os.makedirs(target_dir, exist_ok=True)
    for old in os.listdir(target_dir):
        shutil.rmtree(target_dir + '/' + old, ignore_errors=True)

    subprocess.call('mvn.cmd clean', cwd=mods_path)
    subprocess.call('mvn.cmd javadoc:javadoc', cwd=mods_path)
    for mod in os.listdir(mods_path):
        mod_path = mods_path + '/' + mod
        doc_path = mod_path + '/target/site/apidocs'
        if not os.path.exists(doc_path):
            continue
        shutil.move(doc_path, target_dir + '/' + mod)


def generate_grpc_doc():
    proto_dir = './build/olca-modules/olca-proto/src/main/proto'
    target_dir = './docs/grpc'

    # delete the old doc
    os.makedirs(target_dir, exist_ok=True)
    for old in os.listdir(target_dir):
        old_file = target_dir + '/' + old
        os.remove(old_file)

    if not os.path.exists(proto_dir):
        return
    for proto in os.listdir(proto_dir):
        if not proto.endswith('.proto'):
            continue

        subprocess.call([
            'protoc',
            '-I' + proto_dir,
            '--doc_out=./docs/grpc',
            '--doc_opt=html,%s.html' % proto.replace('.proto', ''),
            proto_dir + '/' + proto
        ])

if __name__ == '__main__':
    main()
