#!/usr/bin/env perl
use strict;
use warnings;

&main;
sub main {
    print "Input filename pattern(ex: *.jpg/*.txt/*~ .etc): ";
    $_ = <STDIN>;
    chomp;
    unless (length($_)) {
        print "Pattern cannot be blank\n";
        return;
    }
    my @results = `find . -name "$_" -print`;
    my $length = @results;
    
    unless ($length > 0) {
        print "No files found.\n";
        return;
    }
    
    for (@results) {
        print "$_";
    }
    print "\nRemove $length files above? (y/n): ";
    $| = 1;
    $_ = <STDIN>;
    chomp;
    if ($_ eq 'y' || $_ eq 'Y') {
        for my $file (@results) {
            system(`rm $file`);
        }
        print "\n==========\n", $length, ($length > 1) ? " files " : " file ", "deleted successfully!\n==========\n";
    } else {
        print "Cancelled.\n";
    }
}
