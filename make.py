import os
import shutil
import subprocess


def main():
    pull_sources()
    generate_java_doc()


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


if __name__ == '__main__':
    main()
