#!/usr/bin/env python3

import argparse
import datetime
import pathlib


def valid_date(s: str) -> datetime.datetime:
    try:
        parsed = datetime.datetime.strptime(s, "%Y-%m-%d")
        return s
    except ValueError:
        raise argparse.ArgumentTypeError(f"not a valid date: {s!r}")

def main(title, date):
    """Creates new datafiles for carvings."""
    with open(pathlib.Path(__file__).parent.resolve() / "_posts" / f"{date}-{title.lower().replace(' ', '_')}.md", "w") as cf:
        cf.write(f"---\ntitle: {title}\ndate: {date}\nlayout: song\ncategories: incomplete\n---")


parser = argparse.ArgumentParser(description='Add new song post.')
parser.add_argument('title', help='Title of the song')
parser.add_argument('date', type=valid_date, help='Date song was written')
args = parser.parse_args()
main(args.title, args.date)